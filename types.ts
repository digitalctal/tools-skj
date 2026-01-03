export enum ToolId {
  DASHBOARD = 'dashboard',
  JSON_FORMATTER = 'json-formatter',
  BASE64 = 'base64',
  UUID_GEN = 'uuid-gen',
  AI_EXPLAINER = 'ai-explainer',
  AI_REGEX = 'ai-regex'
}

export interface ToolDefinition {
  id: ToolId;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: 'converters' | 'generators' | 'ai';
}

export interface HistoryItem {
  id: string;
  toolId: ToolId;
  timestamp: number;
  summary: string;
}