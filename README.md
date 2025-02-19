# React Native Zebra Scanner

This package works with Zebra devices that have an integrated barcode scanner, like the Zebra TC57X. This package was fully tested with a TC57X, since the SDK is not specific to the CT50 other devices will likely work as well but this is not guaranteed.

**Tip**: Use [react-native-camera](https://github.com/react-native-community/react-native-camera) as fallback for devices that don't have an integrated scanner; it has an integrated barcode scanner by using the camera.

## Installation

```
yarn add react-native-zebra-scanner
```

To install the native dependencies:

```
react-native link react-native-zebra-scanner
```

Add the following to your AndroidManifest.xml so that it works on Android 11 and newer:

```
<queries>
  <package android:name="com.symbol.emdk.emdkservice" />
</queries>
```


## Usage

The barcode reader needs to be "claimed" by your application; meanwhile no other application can use it. You can do that like this:

```js
ZebraScanner.startReader().then((claimed) => {
    console.log(claimed ? 'Barcode reader is claimed' : 'Barcode reader is busy');
});
```

To free the claim and stop the reader, also freeing up resources:

```js
ZebraScanner.stopReader().then(() => {
    console.log('Freedom!');
});
```

To get events from the barcode scanner:

```js
ZebraScanner.on('barcodeReadSuccess', event => {
    console.log('Received data', event);
});

ZebraScanner.on('barcodeReadFail', () => {
    console.log('Barcode read failed');
});
```

To stop receiving events:

```js
function barcodeReadFail = () => console.log('Barcode read failed');
ZebraScanner.off('barcodeReadFail', handler);
```
