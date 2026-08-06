export class WorkspacePreferences {
  constructor(
    public readonly theme: 'light' | 'dark' | 'system',
    public readonly density: 'comfortable' | 'compact',
    public readonly motion: 'reduced' | 'normal',
    public readonly layoutDirection: 'ltr' | 'rtl',
  ) {}
}
