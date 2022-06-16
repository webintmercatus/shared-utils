import type { ConfigCategory, Configs, Section } from '../../types';
declare const createSection: (configs: Configs, categoryName?: ConfigCategory, sectionName?: string, override?: object) => Section;
export { createSection, };
