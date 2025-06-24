const Content = ({ numberOfGroups = 6 }: { numberOfGroups?: number }) => {
	const groups = Array.from({ length: numberOfGroups }, (_, groupIndex) => {
		const itemCount = (groupIndex % 4) + 1

		return (
			<div
				key={groupIndex}
				className="flex gap-4"
			>
				{Array.from({ length: itemCount }, (_, itemIndex) => (
					<div
						key={itemIndex}
						className="h-40 w-full rounded-sm bg-gray-300 p-3 text-black"
					></div>
				))}
			</div>
		)
	})

	return <div className="flex flex-col gap-4 px-2 pb-2">{groups}</div>
}

export default Content
