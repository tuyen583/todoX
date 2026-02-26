import React from 'react'
import { Badge } from './ui/badge'
import { Filtertypes } from '@/lib/data'
import { Button } from './ui/button'
import { Filter } from 'lucide-react'

const StatsAndFilters = ({completedTasksCount=0 ,activeTasksCount=0,filter="all"}) => {
	return (
		<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            {/* Phần thống kê */}
            <div className="flex gap-3">
                <Badge 
                variant="secondary"
                className="bg-white/50 text-accent-foreground/80 border-info/20"
                >
                    {activeTasksCount} {Filtertypes.active}
                </Badge>
                <Badge 
                variant="secondary"
                className="bg-white/50 text-success border-success/20"
                >
                    {completedTasksCount} {Filtertypes.completed}
                </Badge>
            </div>
             {/* Phần bộ lọc */}
            <div className="flex flex-col gap-2 sm:flex-row ">
                {Object.keys(Filtertypes).map((type) => (
                    <Button
                        key={type}
                        variant={filter === type ? 'gradient' : 'ghost'}
                        size="sm"
                        className="capitalize"
                    >
                        <Filter className="size-4" />
                        {Filtertypes[type]}
                    </Button>
                ))}
            </div>
		</div>
	)
}

export default StatsAndFilters
