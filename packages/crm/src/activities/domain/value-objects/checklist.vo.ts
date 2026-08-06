export class ChecklistItem {
  constructor(
    public readonly itemId: string,
    public readonly title: string,
    public readonly sequence: number,
    public readonly isMandatory: boolean,
    public readonly isCompleted: boolean,
    public readonly completedById: string | null,
    public readonly completedAt: Date | null,
  ) {}
}

export class Checklist {
  constructor(public readonly items: ChecklistItem[] = []) {}
}
