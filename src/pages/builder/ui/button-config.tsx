type ButtonConfig = {
  label: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

export function createButtonBuilder() {
  const config: Partial<ButtonConfig> = {};

  return {
    setLabel(label: string) {
      config.label = label;
      return this;
    },
    setColor(color: string) {
      config.color = color;
      return this;
    },
    setSize(size: 'small' | 'medium' | 'large') {
      config.size = size;
      return this;
    },
    setOnClick(handler: () => void) {
      config.onClick = handler;
      return this;
    },
    build(): ButtonConfig {
      return config as ButtonConfig;
    },
  };
}
