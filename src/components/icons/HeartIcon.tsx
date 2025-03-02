interface IconProps {
    width?: number | string;
    height?: number | string;
    stroke?: string;
    fill?: string;
    className?: string;
  }
export const HeartIcon = ({ width = 24, height = 24, stroke = 'currentColor', className, fill = 'currentColor' }: IconProps) => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}  
        height={height}
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke} 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
    </svg>
  )
}
