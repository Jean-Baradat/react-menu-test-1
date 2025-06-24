import { ChevronDown } from "lucide-react"
import Content from "@/components/Content"
import { MenuState } from "@/components/Menu"
import { useEffect } from "react"

interface ItemInterface {
	menuState: MenuState
	setMenuState: React.Dispatch<React.SetStateAction<MenuState>>
	numberOfGroups: number
	title: string
	index: number
	menuHover: Array<boolean>
}

const Item = ({
	menuState,
	setMenuState,
	numberOfGroups,
	title,
	index,
	menuHover,
}: ItemInterface) => {
	useEffect(() => {
		if (
			!menuState.menuHover[index] &&
			menuState.isInZone &&
			!menuState.isHoverSubmenu
		) {
			setMenuState({
				...menuState,
				isFirstHovering: true,
			})
		}

		if (menuState.isHoverSubmenu) {
			setMenuState({
				...menuState,
				isFirstHovering: false,
			})
		}
	}, [menuState.menuHover[index]])

	return (
		<>
			<button
				className={`cursor-pointer rounded-md px-4 py-2 text-[#dac6bd] transition-all hover:bg-[#ad928c4d] ${menuState.menuHover[index] ? "bg-[#ad928c4d]" : ""}`}
				onMouseEnter={() =>
					setMenuState({
						...menuState,
						isHovered: true,
						isInZone: true,
						isHovering: true,
						isHoverSubmenu: false,
						menuHover,
					})
				}
				onMouseLeave={() => {
					setMenuState({
						...menuState,
						isHovered: false,
					})
				}}
			>
				<p className="flex items-center justify-between gap-2">
					<span>{title}</span>
					<ChevronDown className="size-4" />
				</p>
			</button>
			<div className="absolute top-14 left-0 w-full">
				<div
					className={`grid rounded-b-md bg-[#181516] transition-[grid-template-rows] duration-300 ease-in-out ${
						((menuState.isHovered && menuState.isInZone) ||
							menuState.isHovering) &&
						menuState.menuHover[index]
							? "grid-rows-[1fr]"
							: "grid-rows-[0fr]"
					} ${menuState.isHovered && menuState.isInZone && menuState.isFirstHovering && menuState.isHovering ? "transition-none" : ""}`}
				>
					<div
						className={`max-h-[calc(100vh-84px)] overflow-y-auto opacity-0 transition-[filter,opacity] delay-100 duration-300 ease-out [scrollbar-width:none] [&::-webkit-scrollbar]:w-0 ${
							menuState.menuHover[index]
								? "opacity-100 blur-none"
								: "opacity-0 blur-[2px]"
						}`}
					>
						<Content numberOfGroups={numberOfGroups} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Item
