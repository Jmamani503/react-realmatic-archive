interface IconProps {
    width?: number | string;
    height?: number | string;
    stroke?: string;
    className?: string;
  }
export const SearchIcon = ({ width = 24, height = 24, stroke = 'currentColor', className }: IconProps) => {
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
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path> 
            <path d="M21 21l-6 -6"></path>
    </svg>
  )
}
