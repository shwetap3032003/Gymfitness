package com.gymfitness

import android.os.Bundle
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {

        val splashScreen = installSplashScreen()

        var keepSplash = true

        splashScreen.setKeepOnScreenCondition {
            keepSplash
        }

        android.os.Handler(mainLooper).postDelayed({
            keepSplash = false
        }, 3000) // 3 seconds

        super.onCreate(savedInstanceState)
    }

    override fun getMainComponentName(): String = "Gymfitness"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(
            this,
            mainComponentName,
            fabricEnabled
        )
}