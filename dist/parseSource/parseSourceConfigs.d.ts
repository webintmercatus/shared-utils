import { SourceConfigs } from '../parseSource/parseSource';
declare const parseSourceConfigs: (source: string, stack: Omit<SourceConfigs, `source`>) => Promise<import("..").StandardizedConfigs>;
export { parseSourceConfigs };
