"use client";

interface ChartProps {
	data: Array<{ name: string; value: number; color?: string }>;
	type?: "bar" | "line" | "pie";
	height?: number;
}

export const Chart = ({ data, type = "bar", height = 200 }: ChartProps) => {
	const maxValue = Math.max(...data.map((d) => d.value));

	if (type === "bar") {
		return (
			<div className="space-y-3" style={{ height }}>
				{data.map((item, index) => (
					<div key={index} className="flex items-center space-x-3">
						<div className="w-20 text-sm text-gray-600 dark:text-gray-400 text-right">
							{item.name}
						</div>
						<div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-6">
							<div
								className={`h-6 rounded-full transition-all duration-300 ${item.color || "bg-blue-500"}`}
								style={{ width: `${(item.value / maxValue) * 100}%` }}
							/>
						</div>
						<div className="w-12 text-sm text-gray-800 dark:text-gray-200 text-right">
							{item.value}
						</div>
					</div>
				))}
			</div>
		);
	}

	if (type === "pie") {
		const total = data.reduce((sum, item) => sum + item.value, 0);
		let currentAngle = 0;

		return (
			<div className="flex items-center justify-center" style={{ height }}>
				<svg width={height} height={height} viewBox="0 0 200 200">
					{data.map((item, index) => {
						const angle = (item.value / total) * 360;
						const startAngle = currentAngle;
						const endAngle = currentAngle + angle;
						currentAngle += angle;

						const startX =
							100 + 80 * Math.cos(((startAngle - 90) * Math.PI) / 180);
						const startY =
							100 + 80 * Math.sin(((startAngle - 90) * Math.PI) / 180);
						const endX = 100 + 80 * Math.cos(((endAngle - 90) * Math.PI) / 180);
						const endY = 100 + 80 * Math.sin(((endAngle - 90) * Math.PI) / 180);

						const largeArcFlag = angle > 180 ? 1 : 0;

						return (
							<path
								key={index}
								d={`M 100 100 L ${startX} ${startY} A 80 80 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
								fill={item.color || `hsl(${index * 60}, 70%, 50%)`}
								stroke="white"
								strokeWidth="2"
							/>
						);
					})}
				</svg>
			</div>
		);
	}

	return null;
};
