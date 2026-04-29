import useLazySection from "../hooks/useLazySection"

/**
 * Wraps any section with a scroll-triggered fade-in animation.
 * Usage: <LazySection as="section" className="py-24 bg-white">...</LazySection>
 */
export default function LazySection({ as: Tag = "section", className = "", children, threshold = 0.12, ...props }) {
  const [ref, isVisible] = useLazySection(threshold)
  return (
    <Tag
      ref={ref}
      className={`lazy-section${isVisible ? " visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
