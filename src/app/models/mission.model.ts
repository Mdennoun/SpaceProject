export interface Mission {
    mission_name: string;
    mission_id: string;
    manufacturers?: (string)[] | null;
    payload_ids?: (string)[] | null;
    wikipedia: string;
    website: string;
    twitter?: string | null;
    description: string;
  }
  