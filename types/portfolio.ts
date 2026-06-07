export type CapabilityIcon = 'database' | 'chart' | 'map';
export type MockType = 'dashboard' | 'map' | 'kpi' | 'geodata';
export type WorkTag = 'engineering' | 'analytics' | 'gis';
export type StackTone = 'primary' | 'secondary';
export type CertVariant = 'inProgress' | 'completed';

export interface StatItem {
  key: 'projects' | 'years' | 'analytics' | 'specs';
  sym: string;
  label: string;
  desc: string;
}

export interface CapabilityItem {
  icon: CapabilityIcon;
  tag: string;
  title: string;
  desc: string;
  deliverables: string[];
}

export interface WorkFilter {
  id: 'all' | WorkTag;
  label: string;
}

export interface WorkItem {
  id: string;
  slug: string;
  client: string;
  clientFull: string;
  role: string;
  period: string;
  active: boolean;
  impact: string;
  desc?: string;
  deliverables?: string[];
  tags: WorkTag[];
  stack: string[];
  mockType: MockType;
  hasCaseStudy?: boolean;
  demoUrl?: string;
  codeUrl?: string;
  reportUrl?: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface StackGroup {
  name: string;
  tone: StackTone;
  items: string[];
}

export interface CertItem {
  year: string;
  label: string;
  tag: string;
  variant: CertVariant;
}
