package com.sai.reactandroidsample;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import com.facebook.AccessToken;
import com.facebook.CallbackManager;
import com.facebook.FacebookAuthorizationException;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.FacebookSdk;
import com.facebook.GraphRequest;
import com.facebook.GraphResponse;
import com.facebook.HttpMethod;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.facebook.login.widget.LoginButton;

import org.json.JSONObject;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;

public class FacebookSignInActivity extends AppCompatActivity {

    CallbackManager callbackManager;
    private static final String TAG = "FacebookSignInActivity";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        FacebookSdk.sdkInitialize(getApplicationContext());

        setContentView(R.layout.activity_facebook_sign_in);


        callbackManager = CallbackManager.Factory.create();
        LoginButton loginButton = (LoginButton) findViewById(R.id.login_button);
        LoginManager.getInstance().logInWithReadPermissions(FacebookSignInActivity.this,
                Arrays.asList("public_profile", "email", "user_birthday", "user_friends",
                        "user_location", "user_relationship_details", "user_relationships"));
        loginButton.registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
            @Override
            public void onSuccess(LoginResult loginResult) {

                String accessToken = loginResult.getAccessToken().getToken();
                Log.i(TAG, "doFacebookLogin: onSuccess Token is " +
                        accessToken);
                try {
                    Log.i(TAG, "doFacebookLogin: onSuccess Permissions are "
                            +
                            AccessToken.getCurrentAccessToken().getPermissions().toString());
                }catch (Exception e){

                }
                Bundle b = new Bundle();
                b.putString("fields", "id,first_name,email,gender,last_name,age_range,birthday,location,friends,relationship_status");
                new GraphRequest(AccessToken.getCurrentAccessToken(), "/v2.4/me", b, HttpMethod.GET,
                        new GraphRequest.Callback() {
                            @Override
                            public void onCompleted(GraphResponse response) {
                                JSONObject responseJson = response.getJSONObject();
                                if (responseJson != null) {
                                    String lSocialId = responseJson.optString("id");
                                    Log.i("FaceboookLoginresponse", responseJson.toString());
                                    String lBirthday = responseJson.optString("birthday") != null ? responseJson.optString("birthday") : "";
                                    String lLocation = responseJson.optString("location") != null ? responseJson.optString("location") : "";
                                    String lRelationShipStatus = responseJson.optString("relationship_status") != null ? responseJson.optString("relationship_status") : "";
                                    String lAgerange = responseJson.optString("age_range") != null ? responseJson.optString("age_range") : "";
                                    String lGender = responseJson.optString("gender") != null ? responseJson.optString("gender") : "";
//                                        CustomLog.info("FBrelationships", responseJson.optString("relationships"));
                                    // Getting FB image
                                    URL imgUrl = null;
                                    try {
                                        imgUrl = new URL("https://graph.facebook.com/" + lSocialId + "/picture?type=large");
                                    } catch (MalformedURLException e) {
                                        e.printStackTrace();
                                    }
                                        /* Facebook login. */
//                                        if (isSignUpEnable)
                                }
                            }
                        }).executeAsync();

            }

            @Override
            public void onCancel() {
                Log.e(TAG, "Login attempt canceled.");
                Log.e(TAG, "onCancel: onCompleted");
            }

            @Override
            public void onError(FacebookException error) {
                Log.e(TAG, "onError: onCompleted");
                Log.e(TAG, "Login failed :: Reason :: " + error.getMessage());
                if (error instanceof FacebookAuthorizationException) {
                    if (AccessToken.getCurrentAccessToken() != null) {
                        LoginManager.getInstance().logOut();
                    }
                }
            }
        });

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        callbackManager.onActivityResult(requestCode, resultCode, data);
    }
}
