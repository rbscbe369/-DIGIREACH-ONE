import { PipelineIdentity } from '../value-objects/pipeline-identity.vo';
import { PipelineProfile } from '../value-objects/pipeline-profile.vo';
import { PipelineTemplate } from '../value-objects/pipeline-template.vo';
import { PipelineCategory } from '../value-objects/pipeline-category.vo';
import { PipelineStage } from './pipeline-stage.entity';
import { PipelineTransition } from '../value-objects/pipeline-transition.vo';
import { PipelineAssignment } from '../value-objects/pipeline-assignment.vo';
import { PipelinePermission } from '../value-objects/pipeline-permission.vo';
import { PipelineGoal } from '../value-objects/pipeline-goal.vo';
import { PipelineForecast } from '../value-objects/pipeline-forecast.vo';
import { PipelineAnalytics } from '../value-objects/pipeline-analytics.vo';
import { PipelineDashboard } from '../value-objects/pipeline-dashboard.vo';
import { PipelineKanban } from '../value-objects/pipeline-kanban.vo';
import { PipelinePreference } from '../value-objects/pipeline-preference.vo';
import { PipelineStatistics } from '../value-objects/pipeline-statistics.vo';
import { PipelineAIProfile } from '../value-objects/pipeline-ai-profile.vo';

export class Pipeline {
  constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly identity: PipelineIdentity,
    public readonly profile: PipelineProfile,
    public template: PipelineTemplate,
    public category: PipelineCategory,
    public stages: PipelineStage[],
    public transitions: PipelineTransition[],
    public assignments: PipelineAssignment[],
    public permissions: PipelinePermission[],
    public goals: PipelineGoal,
    public forecast: PipelineForecast,
    public analytics: PipelineAnalytics,
    public dashboardMetadata: PipelineDashboard,
    public kanbanMetadata: PipelineKanban,
    public preferences: PipelinePreference,
    public statistics: PipelineStatistics,
    public aiProfile: PipelineAIProfile,
    public isActive: boolean = true,
  ) {}

  public activate(): void {
    this.isActive = true;
  }

  public deactivate(): void {
    this.isActive = false;
  }
}
