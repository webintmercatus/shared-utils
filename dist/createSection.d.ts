import type { ConfigCategory, Configs, Section } from '@config-manager/types';
declare const createSection: (configs: Configs, categoryName?: ConfigCategory, sectionName?: string, override?: object) => Section;
export { createSection, };
