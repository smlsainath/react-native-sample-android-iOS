//
//  ViewController.swift
//  ReactImportSampleProject
//
//  Created by SAI on 24/11/16.
//  Copyright © 2016 SAI. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func highScoresButtonTap(_ sender: Any) {
        NSLog("Hello")
        let jsCodeLocation = URL(string: "http://localhost:8081/index.ios.bundle?platform=ios&dev=false")
        
//        let bundlePath = Bundle.main.path(forResource: "tmpBundle", ofType: "js")
//        let jsCodeLocation = URL(string: bundlePath!)
        let mockData:NSDictionary = ["scores":
            [
                ["name":"Alex", "value":"42"],
                ["name":"Joel", "value":"10"]
            ]
        ]
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "RNHighScores",
            initialProperties: mockData as [NSObject : AnyObject],
            launchOptions: nil
        )
        let vc = UIViewController()
        vc.view = rootView
        self.present(vc, animated: true, completion: nil)
    }

}

