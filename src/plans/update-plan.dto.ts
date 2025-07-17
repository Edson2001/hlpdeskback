export class UpdatePlanDto {
    title?: string;
    monthlyPrice?: number;
    annualPrice?: number;
    description?: string;
    features?: string[];
    buttonText?: string;
    highlight?: boolean;
    isActive?: boolean;
  }