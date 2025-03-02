interface IconProps {
    width?: number | string;
    height?: number | string;
    stroke?: string;
    className?: string;
  }
export const CloseMenuIcon = ({ width = 24, height = 24, stroke = 'currentColor', className }: IconProps) => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}  
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke} 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
    </svg>
  )
}
