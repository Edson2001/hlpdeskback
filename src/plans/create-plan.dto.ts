export class CreatePlanDto {
  title: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  buttonText: string;
  highlight?: boolean;
  isActive?: boolean;
}
