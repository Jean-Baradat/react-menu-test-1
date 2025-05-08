import { Menu } from "@/components/Menu"

const App = () => {
	const content = () => {
		return Array.from({ length: 99 }, (_, i) => {
			const randomSize = Math.floor(Math.random() * 400) + 100

			return (
				<div
					key={i}
					className="h-40 flex-1 rounded-sm bg-gray-200"
					style={{
						width: `${randomSize}px`,
						minWidth: `${randomSize}px`,
					}}
				></div>
			)
		})
	}

	return (
		<main>
			<Menu />

			<div className="flex justify-center px-3 pt-24 pb-3 sm:px-0">
				<div className="flex flex-wrap gap-8 sm:max-w-3/4">
					<div className="h-40 w-full rounded-sm bg-gray-300"></div>
					{content()}
					<div className="h-40 w-full rounded-sm bg-gray-300"></div>
				</div>
			</div>
		</main>
	)
}

export default App
