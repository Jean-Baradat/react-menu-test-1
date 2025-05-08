import { ChevronDown } from "lucide-react"
import Content from "@/components/Content"
import { MenuState } from "@/components/Menu"

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
	return (
		<>
			<button
				className={`cursor-pointer rounded-md px-4 py-1.5 text-[#dac6bd] transition-all hover:bg-[#ad928c4d] ${menuState.menuHover[index] && "bg-[#ad928c4d]"}`}
				onMouseEnter={() =>
					setMenuState({
						...menuState,
						isHovered: true,
						isInZone: true,
						menuHover,
					})
				}
				onMouseLeave={() => {
					setMenuState({
						...menuState,
						isHovered: false,
						isHovering: true,
					})
				}}
			>
				<p className="flex items-center justify-between gap-2">
					<span>{title}</span>
					<ChevronDown className="size-4" />
				</p>
			</button>
			<div className="absolute top-12 left-0 w-full rounded-b-2xl rounded-bl-xl bg-[#181516] pt-2">
				<div
					className={`h-0 max-h-max overflow-y-auto rounded-b-lg bg-[#181516] ${!menuState.isHovering && "transition-[height] duration-300 ease-in-out"} [&::-webkit-scrollbar]:w-0 ${
						((menuState.isHovered && menuState.isInZone) ||
							menuState.isHovering) &&
						menuState.menuHover[index]
							? "h-[calc(100vh-84px)]"
							: "h-0"
					}`}
				>
					<div
						className={`px-3 pb-3 opacity-0 transition-[filter,opacity] duration-400 ${menuState.menuHover[index] ? "opacity-100 blur-none" : "opacity-0 blur-[2px]"}`}
					>
						<Content numberOfGroups={numberOfGroups} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Item
