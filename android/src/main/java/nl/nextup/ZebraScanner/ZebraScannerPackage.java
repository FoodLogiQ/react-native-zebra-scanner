package nl.nextup.ZebraScanner;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

public class ZebraScannerPackage implements ReactPackage {
    static final String TAG = "ZebraScanner";

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        if (android.os.Build.MANUFACTURER.contains("Zebra Technologies")) {
            modules.add(new ZebraScannerModule(reactContext));
        }
        return modules;
    }

    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return null;
    }
}