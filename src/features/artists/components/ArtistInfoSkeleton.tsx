
export const ArtistInfoSkeleton = () => {

    return (
        <div className="border border-[#E3C485] rounded-lg flex flex-col p-4 gap-4 sm:flex-row">
					{/* Imagen de perfil */}
					<div className="flex justify-center min-w-fit">
						<div className="bg-gray-700 animate-pulse rounded-full w-72 h-72"></div>
					</div>
					{/* Info del artista */}
					<div className="flex flex-col justify-center gap-4 w-full">
						<div className="w-56 h-12 bg-gray-700 animate-pulse"></div>
						<div className="w-full h-12 bg-gray-700 animate-pulse"></div>
				
						{/* Contadores */}
						<div className="flex gap-2">
							<div className="flex gap-1 items-center">
							<div className="w-6 h-6 bg-gray-700 animate-pulse rounded-full"></div>
							<div className="w-6 h-4 bg-gray-700 animate-pulse"></div>
							</div>
							<div className="flex gap-1 items-center">
							<div className="w-6 h-6 bg-gray-700 animate-pulse rounded-full"></div>
							<div className="w-6 h-4 bg-gray-700 animate-pulse"></div>
							</div>
						</div>
				
						{/* Redes sociales */}
						<div className="w-24 h-6 bg-gray-700 animate-pulse"></div>
					</div>
			  </div>
    )
}