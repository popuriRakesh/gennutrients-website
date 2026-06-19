function LazyImage({ src, alt = "", className = "", width, height, style }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
    />
  );
}

export default LazyImage;
