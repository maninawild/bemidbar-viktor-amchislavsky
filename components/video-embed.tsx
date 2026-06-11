type VideoEmbedProps = {
  title: string;
  videoUrl: string;
  className?: string;
};

function normalizeYouTubeEmbed(url: string) {
  if (url.includes("/embed/") || url.includes("videoseries")) return url;

  try {
    const parsed = new URL(url);
    const videoId = parsed.searchParams.get("v");
    const listId = parsed.searchParams.get("list");

    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    if (listId) return `https://www.youtube.com/embed/videoseries?list=${listId}`;
  } catch {
    return url;
  }

  return url;
}

export function VideoEmbed({ title, videoUrl, className = "" }: VideoEmbedProps) {
  return (
    <div className={`video-frame ${className}`}>
      <iframe
        title={title}
        src={normalizeYouTubeEmbed(videoUrl)}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
