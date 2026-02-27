import React from 'react'
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Calendar, CheckCircle, CheckCircle2, Circle, SquarePen, Trash2 } from 'lucide-react';
import { Input } from './ui/input';

export const TaskCard = ( { task, index } ) => {
    let isEditing = false;
  return (
	<Card className={cn("p-4 border-0 bg-gradient-card shadow-custom-md hover:shadow-custom-lg transition-all duration-200 animate-fadeIn group", 
        task.status === 'completed' ? 'opacity-70' : 'opacity-100'
    )}
    style={{ animationDelay: `${index * 50}ms` }}
    >
    <div className="flex items-start justify-between gap-4">
        {/* Nút tròn*/}
        <Button 
        variant="ghost"
        size="icon"
        className={cn("flex-shrink-0 size-8 rounded-full transition-all duration-200",
         task.status === 'completed' ? 'text-success hover:text-success/80'
          : 'text-muted-foreground hover:text-primary')}>
        {
            task.status === 'completed' ? (
                <CheckCircle2 className="size-4" />
            ):(
                <Circle className="size-4" />
            )
        }
        </Button>
        {/*Chỉnh sửa tiêu đề và mô tả */}
        < div className="flex-1 min-w-0"> 
        {isEditing ? (
            <Input placeholder="Cần phải làm gì" 
            className='flex-1 h-12 boder-boder/50 focus:border-primary/50 focus:ring-primary/20'
            type="text"
            />
        ) : (
            <p className={cn("text-base transition-all duration-200",
                 task.status === 'completed' ? 'line-through text-muted-foreground' : 'text-foreground')}
                 >
                {task.title}
            </p>
        )}
        </div>
        {/*ngày tạo và ngày hoàn thành */}
        <div className="flex  items-center gap-2 mt-1">
            <Calendar className='size-3 text-muted-foreground ' />
            < span className='text-xs text-muted-foreground'>
            {new Date(task.createdAt).toLocaleDateString()}
            </span>
            {task.completedAt && (
                <>
                <span className='text-xs text-muted-foreground'> - </span>
                <Calendar className='size-3 text-success' />
                <span className='text-xs text-muted-foreground'>
                {new Date(task.completedAt).toLocaleDateString()}
                </span>
                </>
            )}  
        </div>
        {/* Nút chỉnh sửa và xóa */}
        <div className='hidden gap-2 group-hover:inline-flex animate-slide-up'>
            {/* Nút chỉnh sửa */}
            <Button variant="ghost" 
            size="icon" 
            className='flex-shrink-0 text-muted-foreground hover:text-info transition-colors'>
                <SquarePen className="size-4" />

            </Button>
            {/* Nút xóa */}
            <Button variant="ghost" 
            size="icon" 
            className='flex-shrink-0 text-muted-foreground hover:text-destructive transition-colors'>
                <Trash2 className="size-4" />
            </Button>
        </div>
     </div>
    </Card>

  )
}