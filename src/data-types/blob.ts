import { Base64, Base64Url } from "../types";
import { assertType } from "./_utils";

/**
 * Test if input is an instance of [Blob][Blob] and return `true` or `false`.
 * @group Blob
 */
export function isBlob(input: any): input is Blob {
  return input instanceof Blob;
}

/**
 * Assert that input is an instance of [Blob][Blob] or throw a `TypeError`.
 * @group Blob
 */
export const assertBlob = (input: unknown) => assertType("Blob", input, isBlob);

/**
 * Convert from [Blob][Blob] to [ArrayBuffer][ArrayBuffer]
 * @group Blob
 */
export function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer> {
  assertBlob(blob);
  return blob.arrayBuffer();
}

/**
 * Convert from [Blob][Blob] to [DataView][DataView]
 * @group Blob
 */
export function blobToDataView(blob: Blob): Promise<DataView> {
  assertBlob(blob);
  return blob.arrayBuffer().then((arrayBuffer) => new DataView(arrayBuffer));
}

/**
 * Convert from [Blob][Blob] to [Number Array][Number Array]
 * @group Blob
 */
export function blobToNumberArray(blob: Blob): Promise<number[]> {
  assertBlob(blob);
  return blob
    .arrayBuffer()
    .then((arrayBuffer) => [...new Uint8Array(arrayBuffer)]);
}

/**
 * Convert from [Blob][Blob] to [ReadableStream][ReadableStream]
 * @group Blob
 */
export function blobToReadableStream(blob: Blob): ReadableStream<Uint8Array> {
  assertBlob(blob);
  return blob.stream();
}

/**
 * Convert from [Blob][Blob] to [Response][Response]
 * @group Blob
 */
export function blobToResponse(blob: Blob, init?: ResponseInit): Response {
  assertBlob(blob);
  return new Response(blob, init);
}

/**
 * Convert from [Blob][Blob] to [String][String]
 * @group Blob
 */
export function blobToString(blob: Blob): Promise<string> {
  assertBlob(blob);
  return blob.text();
}

/**
 * Convert from [Blob][Blob] to [Uint8Array][Uint8Array]
 * @group Blob
 */
export function blobToUint8Array(blob: Blob): Promise<Uint8Array> {
  assertBlob(blob);
  return blob.arrayBuffer().then((arrayBuffer) => new Uint8Array(arrayBuffer));
}

/**
 * Convert from [Blob][Blob] to [Base64][Base64]
 * @group Blob
 */
export function blobToBase64(blob: Blob): Promise<Base64> {
  assertBlob(blob);
  return blob.arrayBuffer().then((arrayBuffer) => {
    const uint8Array = new Uint8Array(arrayBuffer);
    return globalThis.btoa(String.fromCodePoint(...uint8Array)) as Base64;
  });
}

/**
 * Convert from [Blob][Blob] to [Base64Url][Base64]
 * @group Blob
 */
export function blobToBase64Url(blob: Blob): Promise<Base64Url> {
  assertBlob(blob);
  return blob.arrayBuffer().then((arrayBuffer) => {
    const uint8Array = new Uint8Array(arrayBuffer);
    return globalThis.btoa(String.fromCodePoint(...uint8Array))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "") as Base64Url;
  });
}
