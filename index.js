const ReactNative = require('react-native');
const { NativeModules, DeviceEventEmitter } = ReactNative;
const ZebraScanner = NativeModules.ZebraScanner || {}; // Hacky fallback for iOS

const allowedEvents = [
  ZebraScanner.BARCODE_READ_SUCCESS,
  ZebraScanner.BARCODE_READ_FAIL,
];

/**
 * Listen for available events
 * @param  {String} eventName Name of event one of barcodeReadSuccess, barcodeReadFail
 * @param  {Function} handler Event handler
 */
 ZebraScanner.on = (eventName, handler) => {
  if (!allowedEvents.includes(eventName)) {
    throw new Error(`Event name ${eventName} is not a supported event.`);
  }
  return DeviceEventEmitter.addListener(eventName, handler);
};

/**
 * Stop listening for event
 * @param  {String} eventName Name of event one of barcodeReadSuccess, barcodeReadFail
 * @param  {Function} handler Event handler
 */
 ZebraScanner.off = (eventName, handler) => {
  if (!allowedEvents.includes(eventName)) {
    throw new Error(`Event name ${eventName} is not a supported event.`);
  }
  return DeviceEventEmitter.removeListener(eventName, handler);
};

module.exports = ZebraScanner;
