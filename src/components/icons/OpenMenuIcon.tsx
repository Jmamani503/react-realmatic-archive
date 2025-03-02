interface IconProps {
    width?: number | string;
    height?: number | string;
    stroke?: string;
    className?: string;
  }
export const OpenMenuIcon = ({ width = 24, height = 24, stroke = 'currentColor', className }: IconProps) => {
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
    </svg>
  )
}
