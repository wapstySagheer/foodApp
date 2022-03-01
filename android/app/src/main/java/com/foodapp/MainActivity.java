package com.foodapp;

import com.facebook.react.ReactActivity;
import android.os.Bundle; // importing for navigation
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "FoodApp";
  }

  //override for navigation
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

}
