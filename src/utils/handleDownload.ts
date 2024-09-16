export const handleDownload = (url: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = "audio.mp3";
  a.click();
  URL.revokeObjectURL(url);
};
