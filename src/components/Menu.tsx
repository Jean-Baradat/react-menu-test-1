import { Search, Frame } from "lucide-react"
import { useState } from "react"
import Item from "@/components/Item"

export type MenuState = {
	isHovered: boolean
	isInZone: boolean
	isHovering: boolean
	menuHover: Array<boolean>
}

export const Menu = () => {
	const [menuState, setMenuState] = useState<MenuState>({
		isHovered: false,
		isInZone: false,
		isHovering: false,
		menuHover: [false, false, false],
	})

	return (
		<header className="fixed z-2 mt-3 flex w-full flex-col items-center justify-center">
			<section
				aria-label="Menu access"
				className="top relative flex h-14 w-3/4 justify-between gap-4 rounded-md bg-[#181516] transition-all duration-200"
				onMouseEnter={() => setMenuState({ ...menuState, isInZone: true })}
				onMouseLeave={() =>
					setMenuState({
						...menuState,
						isInZone: false,
						isHovering: false,
						menuHover: [false, false, false],
					})
				}
			>
				<div className="flex h-14 w-full items-center justify-between gap-4 px-2">
					<div>
						<Frame className="ml-3 min-w-8 text-white" />
					</div>
					<nav>
						<ul className="flex items-center justify-center gap-2">
							<li>
								<Item
									menuState={menuState}
									setMenuState={setMenuState}
									numberOfGroups={2}
									title="Hosting for WordPress"
									index={0}
									menuHover={[true, false, false]}
								/>
							</li>
							<li>
								<Item
									menuState={menuState}
									setMenuState={setMenuState}
									numberOfGroups={4}
									title="Solutions"
									index={1}
									menuHover={[false, true, false]}
								/>
							</li>
							<li>
								<a
									className="cursor-pointer rounded-md px-4 py-1.5 text-[#dac6bd] transition-all hover:bg-[#ad928c4d]"
									href="/"
									onMouseEnter={() =>
										setMenuState({
											...menuState,
											isHovering: false,
											isHovered: false,
											menuHover: [false, false, false],
										})
									}
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									className="cursor-pointer rounded-md px-4 py-1.5 text-[#dac6bd] transition-all hover:bg-[#ad928c4d]"
									href="/"
									onMouseEnter={() =>
										setMenuState({
											...menuState,
											isHovering: false,
											isHovered: false,
											menuHover: [false, false, false],
										})
									}
								>
									Docs
								</a>
							</li>
							<li>
								<Item
									menuState={menuState}
									setMenuState={setMenuState}
									numberOfGroups={6}
									title="Help"
									index={2}
									menuHover={[false, false, true]}
								/>
							</li>
						</ul>
					</nav>
					<div>
						<ul className="flex items-center justify-center gap-2">
							<li className="cursor-pointer rounded-md px-3 py-1.5 text-[#dac6bd] transition-all hover:text-white">
								<Search />
							</li>
							<li className="cursor-pointer rounded-md px-3 py-1.5 text-[#dac6bd] transition-all hover:text-white">
								Login
							</li>
							<li className="cursor-pointer rounded-md bg-[#f2e9e3] px-4 py-1.5 text-[#0e0d0e] transition-all hover:bg-[#dac6bd]">
								Sign up
							</li>
						</ul>
					</div>
				</div>
			</section>
		</header>
	)
}
