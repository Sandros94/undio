// Auto generated using gen-maps script
import {
  assertArrayBuffer,
  blobToArrayBuffer,
  dataViewToArrayBuffer,
  numberArrayToArrayBuffer,
  readableStreamToArrayBuffer,
  responseToArrayBuffer,
  stringToArrayBuffer,
  uint8ArrayToArrayBuffer,
  assertBlob,
  arrayBufferToBlob,
  dataViewToBlob,
  numberArrayToBlob,
  readableStreamToBlob,
  responseToBlob,
  stringToBlob,
  uint8ArrayToBlob,
  assertDataView,
  arrayBufferToDataView,
  blobToDataView,
  numberArrayToDataView,
  readableStreamToDataView,
  responseToDataView,
  stringToDataView,
  uint8ArrayToDataView,
  assertNumberArray,
  arrayBufferToNumberArray,
  blobToNumberArray,
  dataViewToNumberArray,
  readableStreamToNumberArray,
  responseToNumberArray,
  stringToNumberArray,
  uint8ArrayToNumberArray,
  assertReadableStream,
  arrayBufferToReadableStream,
  blobToReadableStream,
  dataViewToReadableStream,
  numberArrayToReadableStream,
  responseToReadableStream,
  stringToReadableStream,
  uint8ArrayToReadableStream,
  assertResponse,
  arrayBufferToResponse,
  blobToResponse,
  dataViewToResponse,
  numberArrayToResponse,
  readableStreamToResponse,
  stringToResponse,
  uint8ArrayToResponse,
  assertString,
  arrayBufferToString,
  blobToString,
  dataViewToString,
  numberArrayToString,
  readableStreamToString,
  responseToString,
  uint8ArrayToString,
  assertUint8Array,
  arrayBufferToUint8Array,
  blobToUint8Array,
  dataViewToUint8Array,
  numberArrayToUint8Array,
  readableStreamToUint8Array,
  responseToUint8Array,
  stringToUint8Array,
} from "./data-types";

export const _toArrayBuffer = {
  ArrayBuffer: (input: unknown) => (assertArrayBuffer(input), input),
  Blob: blobToArrayBuffer,
  DataView: dataViewToArrayBuffer,
  NumberArray: numberArrayToArrayBuffer,
  ReadableStream: readableStreamToArrayBuffer,
  Response: responseToArrayBuffer,
  String: stringToArrayBuffer,
  Uint8Array: uint8ArrayToArrayBuffer,
} as const;

export const _toBlob = {
  ArrayBuffer: arrayBufferToBlob,
  Blob: (input: unknown) => (assertBlob(input), input),
  DataView: dataViewToBlob,
  NumberArray: numberArrayToBlob,
  ReadableStream: readableStreamToBlob,
  Response: responseToBlob,
  String: stringToBlob,
  Uint8Array: uint8ArrayToBlob,
} as const;

export const _toDataView = {
  ArrayBuffer: arrayBufferToDataView,
  Blob: blobToDataView,
  DataView: (input: unknown) => (assertDataView(input), input),
  NumberArray: numberArrayToDataView,
  ReadableStream: readableStreamToDataView,
  Response: responseToDataView,
  String: stringToDataView,
  Uint8Array: uint8ArrayToDataView,
} as const;

export const _toNumberArray = {
  ArrayBuffer: arrayBufferToNumberArray,
  Blob: blobToNumberArray,
  DataView: dataViewToNumberArray,
  NumberArray: (input: unknown) => (assertNumberArray(input), input),
  ReadableStream: readableStreamToNumberArray,
  Response: responseToNumberArray,
  String: stringToNumberArray,
  Uint8Array: uint8ArrayToNumberArray,
} as const;

export const _toReadableStream = {
  ArrayBuffer: arrayBufferToReadableStream,
  Blob: blobToReadableStream,
  DataView: dataViewToReadableStream,
  NumberArray: numberArrayToReadableStream,
  ReadableStream: (input: unknown) => (assertReadableStream(input), input),
  Response: responseToReadableStream,
  String: stringToReadableStream,
  Uint8Array: uint8ArrayToReadableStream,
} as const;

export const _toResponse = {
  ArrayBuffer: arrayBufferToResponse,
  Blob: blobToResponse,
  DataView: dataViewToResponse,
  NumberArray: numberArrayToResponse,
  ReadableStream: readableStreamToResponse,
  Response: (input: unknown) => (assertResponse(input), input),
  String: stringToResponse,
  Uint8Array: uint8ArrayToResponse,
} as const;

export const _toString = {
  ArrayBuffer: arrayBufferToString,
  Blob: blobToString,
  DataView: dataViewToString,
  NumberArray: numberArrayToString,
  ReadableStream: readableStreamToString,
  Response: responseToString,
  String: (input: unknown) => (assertString(input), input),
  Uint8Array: uint8ArrayToString,
} as const;

export const _toUint8Array = {
  ArrayBuffer: arrayBufferToUint8Array,
  Blob: blobToUint8Array,
  DataView: dataViewToUint8Array,
  NumberArray: numberArrayToUint8Array,
  ReadableStream: readableStreamToUint8Array,
  Response: responseToUint8Array,
  String: stringToUint8Array,
  Uint8Array: (input: unknown) => (assertUint8Array(input), input),
} as const;

export const _to = {
  ArrayBuffer: _toArrayBuffer,
  Blob: _toBlob,
  DataView: _toDataView,
  NumberArray: _toNumberArray,
  ReadableStream: _toReadableStream,
  Response: _toResponse,
  String: _toString,
  Uint8Array: _toUint8Array,
} as const;