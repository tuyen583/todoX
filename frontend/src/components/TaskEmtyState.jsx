import React from 'react';
import { Card } from './ui/card';
import { Circle } from 'lucide-react';

const TaskEmptyState = ({ filter }) => {
  return (
	<Card className="p-8 text-center border-0 bg-gradient-card shadow-custom-lg">
		<div className="space-y-4">
			<Circle className="size-12 mx-auto text-muted-foreground" />
			<div>
			    <h3 className="font-medium text-lg text-muted-foreground">
				{
					filter === 'active' ? 'Không có nhiệm vụ nào đang hoạt động!' :
					filter === 'completed' ? 'Không có nhiệm vụ nào đã hoàn thành!' :
					"Chưa có nhiệm vụ nào được tạo!"
				}
				</h3>
				<p className="text-sm text-muted-foreground">
					{
						filter === 'all' 
						? 'Hãy tạo một nhiệm vụ mới để bắt đầu!'
						: `Chuyển sang bộ lọc khác để xem các nhiệm vụ tương ứng ${filter === 'active' ? 'đã hoàn thành' : 'đang hoạt động'}`
					}
				</p>
			</div>

		</div>

	</Card>
  );
};

export default TaskEmptyState;