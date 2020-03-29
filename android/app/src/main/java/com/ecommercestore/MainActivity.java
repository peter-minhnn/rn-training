package com.ecommercestore;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "EcommerceStore";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // SplashScreen.show(this, R.style.SplashScreenTheme); // here
    SplashScreen.show(this); // here
    super.onCreate(savedInstanceState);
  }
}
