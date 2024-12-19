package com.greentouch_demo_app;

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule

class ScreenReceiverModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val TAG = "ScreenReceiver"
    private val reactContext: ReactApplicationContext = reactContext

    override fun getName(): String {
        return "ScreenReceiverModule"
    }

    init {
        registerScreenReceiver()
    }

    private fun sendEvent(eventName: String, eventData: String) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, eventData)
    }

    private fun registerScreenReceiver() {
        val screenReceiver = object : BroadcastReceiver() {
            override fun onReceive(context: Context?, intent: Intent?) {
                when (intent?.action) {
                    Intent.ACTION_SCREEN_ON -> {
                        Log.d(TAG, "Screen ON")
                        sendEvent("onScreenChange", "SCREEN_ON")
                    }
                    Intent.ACTION_SCREEN_OFF -> {
                        Log.d(TAG, "Screen OFF")
                        sendEvent("onScreenChange", "SCREEN_OFF")
                    }
                }
            }
        }

        val filter = IntentFilter().apply {
            addAction(Intent.ACTION_SCREEN_ON)
            addAction(Intent.ACTION_SCREEN_OFF)
        }
        reactContext.registerReceiver(screenReceiver, filter)
    }
}