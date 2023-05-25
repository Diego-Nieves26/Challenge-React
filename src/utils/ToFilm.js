const constraints = (window.constraints = {
  audio: true,
  video: true,
});

let mediaRecorder;
let recordedBlobs;
let format = getSupportedMimeTypes();

function getSupportedMimeTypes() {
  const possibleTypes = [
    "video/webm;codecs=av1,opus",
    "video/webm;codecs=vp9,opus",
    "video/webm;codecs=vp8,opus",
    "video/webm;codecs=h264,opus",
    "video/mp4;codecs=h264,aac",
  ];
  const mimeTypes = possibleTypes.filter((mimeType) => {
    return MediaRecorder.isTypeSupported(mimeType);
  });

  return mimeTypes[0];
}

function handleDataAvailable(event) {
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data);
  }
}

export async function InitFilm(pageID) {
  recordedBlobs = [];
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    window.stream = stream;

    const video = document.querySelector(`#gum-local-${pageID}`);
    video.srcObject = stream;

    const options = { format };

    mediaRecorder = new MediaRecorder(window.stream, options);

    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
  } catch (e) {
    console.log(e);
  }
}

export function StopFilm() {
  mediaRecorder.stop();
}

export function SaveFilm() {
  const superBuffer = new Blob(recordedBlobs, { type: format });
  const url = window.URL.createObjectURL(superBuffer);

  return url;
}

export function PlayFilm(url, pageID) {
  const video = document.querySelector(`#gum-local-${pageID}`);

  video.src = null;
  video.srcObject = null;
  video.src = url;
  video.controls = false;
  video.loop = true;
  video.play();
}

export function ResetContainerVideo(pageID) {
  const video = document.querySelector(`#gum-local-${pageID}`);

  video.src = null;
  video.srcObject = null;
  video.src = null;
  video.controls = false;
  video.loop = true;
}
