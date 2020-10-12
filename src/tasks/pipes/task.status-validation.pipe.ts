import { BadRequestException, PipeTransform } from "@nestjs/common"
import { TaskStatus } from '../task-status.enum'

export class TaskStatusValidationPipe implements PipeTransform {
    //Metadata is optional
    readonly allowedStatuses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE,
    ]

    //Transform also have an optional function args call -> metadata : ArgumentMetadata
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    transform (value : any) : any  {
        value = value.toUpperCase()

        if (!this.isStatusValid(value))
            throw new BadRequestException(`${value} is an invalid status`)
        return value
    }

    private isStatusValid(status : any) : boolean {
        const idx = this.allowedStatuses.indexOf(status)
        return idx !== -1
    }
} 