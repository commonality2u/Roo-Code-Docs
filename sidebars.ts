import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installing',
        'getting-started/connecting-api-provider',
        'getting-started/your-first-task',
        'basic-usage/the-chat-interface',
        'basic-usage/typing-your-requests',
        'basic-usage/how-tools-work',
        'basic-usage/context-mentions',
        'basic-usage/using-modes',
        'tips-and-tricks',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/api-configuration-profiles',
        'features/auto-approving-actions',
        'features/boomerang-tasks',
        'features/browser-use',
        'features/checkpoints',
        'features/code-actions',
        'features/custom-instructions',
        'features/custom-modes',
        'features/enhance-prompt',
        'features/fast-edits',
        'features/footgun-prompting',
        'features/model-temperature',
        'features/settings-management',
        'features/suggested-responses',
        'features/shell-integration',
        {
          type: 'category',
          label: 'Tool Use',
          items: [
            'features/tools/tool-use-overview',
            'features/tools/access-mcp-resource',
            'features/tools/apply-diff',
            'features/tools/ask-followup-question',
            'features/tools/attempt-completion',
            'features/tools/browser-action',
            'features/tools/execute-command',
            'features/tools/list-code-definition-names',
            'features/tools/list-files',
            'features/tools/new-task',
            'features/tools/read-file',
            'features/tools/search-files',
            'features/tools/switch-mode',
            'features/tools/use-mcp-tool',
            'features/tools/write-to-file',
          ],
        },
        {
          type: 'category',
          label: 'MCP',
          items: [
            {
              type: 'doc',
              id: 'features/mcp/overview',
              label: 'MCP Overview'
            },
            'features/mcp/using-mcp-in-roo',
            'features/mcp/what-is-mcp',
            'features/mcp/server-transports',
            'features/mcp/mcp-vs-api',
          ],
        },
        {
          type: 'category',
          label: 'Experimental',
          items: [
            'features/experimental/experimental-features',
          ],
        },
        'features/more-features',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Usage',
      items: [
        'advanced-usage/prompt-engineering',
        'advanced-usage/large-projects',
        'advanced-usage/rate-limits-costs',
        'advanced-usage/local-models',
      ],
    },
    {
      type: 'category',
      label: 'Model Providers',
      items: [
        'providers/anthropic',
        'providers/bedrock',
        'providers/deepseek',
        'providers/vertex',
        'providers/gemini',
        'providers/glama',
        'providers/human-relay',
        'providers/lmstudio',
        'providers/mistral',
        'providers/ollama',
        'providers/openai',
        'providers/openai-compatible',
        'providers/openrouter',
        'providers/requesty',
        'providers/unbound',
        'providers/vscode-lm',
      ]
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq',
      ],
    },
    'tutorial-videos',
    {
      type: 'category',
      label: 'Community',
      items: [
        'community',
      ],
    },
    {
      type: 'category',
      label: 'Update Notes',
      items: [
        'update-notes/index',
        {
          type: 'category',
          label: '3.11',
          items: [
            { type: 'doc', id: 'update-notes/v3.11.17', label: '3.11.17' },
            { type: 'doc', id: 'update-notes/v3.11.16', label: '3.11.16' },
            { type: 'doc', id: 'update-notes/v3.11.15', label: '3.11.15' },
            { type: 'doc', id: 'update-notes/v3.11.14', label: '3.11.14' },
            { type: 'doc', id: 'update-notes/v3.11.13', label: '3.11.13' },
            { type: 'doc', id: 'update-notes/v3.11.12', label: '3.11.12' },
            { type: 'doc', id: 'update-notes/v3.11.11', label: '3.11.11' },
            { type: 'doc', id: 'update-notes/v3.11.10', label: '3.11.10' },
            { type: 'doc', id: 'update-notes/v3.11.9', label: '3.11.9' },
            { type: 'doc', id: 'update-notes/v3.11.8', label: '3.11.8' },
            { type: 'doc', id: 'update-notes/v3.11.7', label: '3.11.7' },
            { type: 'doc', id: 'update-notes/v3.11.6', label: '3.11.6' },
            { type: 'doc', id: 'update-notes/v3.11.5', label: '3.11.5' },
            { type: 'doc', id: 'update-notes/v3.11.3', label: '3.11.3' },
            { type: 'doc', id: 'update-notes/v3.11.2', label: '3.11.2' },
            { type: 'doc', id: 'update-notes/v3.11.1', label: '3.11.1' },
            { type: 'doc', id: 'update-notes/v3.11', label: '3.11.0' },
          ],
        },
        {
          type: 'category',
          label: '3.10',
          items: [
            { type: 'doc', id: 'update-notes/v3.10.5', label: '3.10.5' },
            { type: 'doc', id: 'update-notes/v3.10.4', label: '3.10.4' },
            { type: 'doc', id: 'update-notes/v3.10.3', label: '3.10.3' },
            { type: 'doc', id: 'update-notes/v3.10.2', label: '3.10.2' },
            { type: 'doc', id: 'update-notes/v3.10.1', label: '3.10.1' },
            { type: 'doc', id: 'update-notes/v3.10.0', label: '3.10.0' },
          ],
        },
        {
          type: 'category',
          label: '3.9',
          items: [
            { type: 'doc', id: 'update-notes/v3.9.2', label: '3.9.2' },
            { type: 'doc', id: 'update-notes/v3.9.1', label: '3.9.1' },
            { type: 'doc', id: 'update-notes/v3.9.0', label: '3.9.0' },
          ],
        },
        {
          type: 'category',
          label: '3.8',
          items: [
            { type: 'doc', id: 'update-notes/v3.8.6', label: '3.8.6' },
            { type: 'doc', id: 'update-notes/v3.8.5', label: '3.8.5' },
            { type: 'doc', id: 'update-notes/v3.8.4', label: '3.8.4' },
            { type: 'doc', id: 'update-notes/v3.8.3', label: '3.8.3' },
            { type: 'doc', id: 'update-notes/v3.8.2', label: '3.8.2' },
            { type: 'doc', id: 'update-notes/v3.8.1', label: '3.8.1' },
            { type: 'doc', id: 'update-notes/v3.8.0', label: '3.8.0' },
          ],
        },
        {
          type: 'category',
          label: '3.7',
          items: [
            { type: 'doc', id: 'update-notes/v3.7.12', label: '3.7.12' },
            { type: 'doc', id: 'update-notes/v3.7.11', label: '3.7.11' },
            { type: 'doc', id: 'update-notes/v3.7.10', label: '3.7.10' },
            { type: 'doc', id: 'update-notes/v3.7.9', label: '3.7.9' },
            { type: 'doc', id: 'update-notes/v3.7.8', label: '3.7.8' },
            { type: 'doc', id: 'update-notes/v3.7.7', label: '3.7.7' },
            { type: 'doc', id: 'update-notes/v3.7.6', label: '3.7.6' },
            { type: 'doc', id: 'update-notes/v3.7.5', label: '3.7.5' },
            { type: 'doc', id: 'update-notes/v3.7.4', label: '3.7.4' },
            { type: 'doc', id: 'update-notes/v3.7.3', label: '3.7.3' },
            { type: 'doc', id: 'update-notes/v3.7.2', label: '3.7.2' },
            { type: 'doc', id: 'update-notes/v3.7.1', label: '3.7.1' },
            { type: 'doc', id: 'update-notes/v3.7.0', label: '3.7.0' },
          ],
        },
        {
          type: 'category',
          label: '3.3',
          items: [
            { type: 'doc', id: 'update-notes/v3.3.26', label: '3.3.26' },
            { type: 'doc', id: 'update-notes/v3.3.25', label: '3.3.25' },
            { type: 'doc', id: 'update-notes/v3.3.24', label: '3.3.24' },
            { type: 'doc', id: 'update-notes/v3.3.23', label: '3.3.23' },
            { type: 'doc', id: 'update-notes/v3.3.22', label: '3.3.22' },
            { type: 'doc', id: 'update-notes/v3.3.21', label: '3.3.21' },
            { type: 'doc', id: 'update-notes/v3.3.20', label: '3.3.20' },
            { type: 'doc', id: 'update-notes/v3.3.19', label: '3.3.19' },
            { type: 'doc', id: 'update-notes/v3.3.18', label: '3.3.18' },
            { type: 'doc', id: 'update-notes/v3.3.17', label: '3.3.17' },
            { type: 'doc', id: 'update-notes/v3.3.16', label: '3.3.16' },
            { type: 'doc', id: 'update-notes/v3.3.15', label: '3.3.15' },
            { type: 'doc', id: 'update-notes/v3.3.14', label: '3.3.14' },
            { type: 'doc', id: 'update-notes/v3.3.13', label: '3.3.13' },
            { type: 'doc', id: 'update-notes/v3.3.12', label: '3.3.12' },
            { type: 'doc', id: 'update-notes/v3.3.11', label: '3.3.11' },
            { type: 'doc', id: 'update-notes/v3.3.10', label: '3.3.10' },
            { type: 'doc', id: 'update-notes/v3.3.9', label: '3.3.9' },
            { type: 'doc', id: 'update-notes/v3.3.8', label: '3.3.8' },
            { type: 'doc', id: 'update-notes/v3.3.7', label: '3.3.7' },
            { type: 'doc', id: 'update-notes/v3.3.6', label: '3.3.6' },
            { type: 'doc', id: 'update-notes/v3.3.5', label: '3.3.5' },
            { type: 'doc', id: 'update-notes/v3.3.4', label: '3.3.4' },
            { type: 'doc', id: 'update-notes/v3.3.3', label: '3.3.3' },
            { type: 'doc', id: 'update-notes/v3.3.2', label: '3.3.2' },
            { type: 'doc', id: 'update-notes/v3.3.1', label: '3.3.1' },
            { type: 'doc', id: 'update-notes/v3.3.0', label: '3.3.0' },
          ],
        },
        {
          type: 'category',
          label: '3.1',
          items: [
            { type: 'doc', id: 'update-notes/v3.1.7', label: '3.1.7' },
            { type: 'doc', id: 'update-notes/v3.1.6', label: '3.1.6' },
            { type: 'doc', id: 'update-notes/v3.1.4', label: '3.1.4' }, // Includes 3.1.5 fix
            { type: 'doc', id: 'update-notes/v3.1.3', label: '3.1.3' },
            { type: 'doc', id: 'update-notes/v3.1.2', label: '3.1.2' },
            { type: 'doc', id: 'update-notes/v3.1.1', label: '3.1.1' },
            { type: 'doc', id: 'update-notes/v3.1.0', label: '3.1.0' },
          ],
        },
        {
          type: 'category',
          label: '3.0',
          items: [
            { type: 'doc', id: 'update-notes/v3.0.3', label: '3.0.3' },
            { type: 'doc', id: 'update-notes/v3.0.2', label: '3.0.2' },
            { type: 'doc', id: 'update-notes/v3.0.1', label: '3.0.1' },
            { type: 'doc', id: 'update-notes/v3.0.0', label: '3.0.0' },
          ],
        },
        {
          type: 'category',
          label: '3.2',
          items: [
            { type: 'doc', id: 'update-notes/v3.2.8', label: '3.2.8' },
            { type: 'doc', id: 'update-notes/v3.2.7', label: '3.2.7' },
            { type: 'doc', id: 'update-notes/v3.2.6', label: '3.2.6' },
            { type: 'doc', id: 'update-notes/v3.2.5', label: '3.2.5' },
            { type: 'doc', id: 'update-notes/v3.2.4', label: '3.2.4' },
            { type: 'doc', id: 'update-notes/v3.2.3', label: '3.2.3' },
            { type: 'doc', id: 'update-notes/v3.2.0', label: '3.2.0' }, // Includes 3.2.1, 3.2.2
          ],
        },
        {
          type: 'category',
          label: '2.2',
          items: [
            { type: 'doc', id: 'update-notes/v2.2.46', label: '2.2.46' },
            { type: 'doc', id: 'update-notes/v2.2.45', label: '2.2.45' },
            { type: 'doc', id: 'update-notes/v2.2.44', label: '2.2.44' },
            { type: 'doc', id: 'update-notes/v2.2.43', label: '2.2.43' },
            { type: 'doc', id: 'update-notes/v2.2.42', label: '2.2.42' },
            { type: 'doc', id: 'update-notes/v2.2.41', label: '2.2.41' },
            { type: 'doc', id: 'update-notes/v2.2.40', label: '2.2.40' },
            { type: 'doc', id: 'update-notes/v2.2.39', label: '2.2.39' },
            { type: 'doc', id: 'update-notes/v2.2.38', label: '2.2.38' },
            { type: 'doc', id: 'update-notes/v2.2.36', label: '2.2.36' }, // Includes 2.2.37
            { type: 'doc', id: 'update-notes/v2.2.35', label: '2.2.35' },
            { type: 'doc', id: 'update-notes/v2.2.34', label: '2.2.34' },
            { type: 'doc', id: 'update-notes/v2.2.33', label: '2.2.33' },
            { type: 'doc', id: 'update-notes/v2.2.32', label: '2.2.32' },
            { type: 'doc', id: 'update-notes/v2.2.31', label: '2.2.31' },
            { type: 'doc', id: 'update-notes/v2.2.30', label: '2.2.30' },
            { type: 'doc', id: 'update-notes/v2.2.29', label: '2.2.29' },
            { type: 'doc', id: 'update-notes/v2.2.28', label: '2.2.28' },
            { type: 'doc', id: 'update-notes/v2.2.27', label: '2.2.27' },
            { type: 'doc', id: 'update-notes/v2.2.26', label: '2.2.26' },
            { type: 'doc', id: 'update-notes/v2.2.25', label: '2.2.25' },
            { type: 'doc', id: 'update-notes/v2.2.24', label: '2.2.24' },
            { type: 'doc', id: 'update-notes/v2.2.23', label: '2.2.23' },
            { type: 'doc', id: 'update-notes/v2.2.22', label: '2.2.22' },
            { type: 'doc', id: 'update-notes/v2.2.21', label: '2.2.21' },
            { type: 'doc', id: 'update-notes/v2.2.20', label: '2.2.20' },
            { type: 'doc', id: 'update-notes/v2.2.19', label: '2.2.19' },
            { type: 'doc', id: 'update-notes/v2.2.18', label: '2.2.18' },
            { type: 'doc', id: 'update-notes/v2.2.17', label: '2.2.17' },
            { type: 'doc', id: 'update-notes/v2.2.16', label: '2.2.16' },
            { type: 'doc', id: 'update-notes/v2.2.14', label: '2.2.14' }, // Includes 2.2.15
            { type: 'doc', id: 'update-notes/v2.2.13', label: '2.2.13' },
            { type: 'doc', id: 'update-notes/v2.2.12', label: '2.2.12' },
            { type: 'doc', id: 'update-notes/v2.2.11', label: '2.2.11' },
            { type: 'doc', id: 'update-notes/v2.2.6', label: '2.2.6' }, // Includes 2.2.7-2.2.10
            { type: 'doc', id: 'update-notes/v2.2.5', label: '2.2.5' },
            { type: 'doc', id: 'update-notes/v2.2.4', label: '2.2.4' },
            { type: 'doc', id: 'update-notes/v2.2.3', label: '2.2.3' },
            { type: 'doc', id: 'update-notes/v2.2.2', label: '2.2.2' },
            { type: 'doc', id: 'update-notes/v2.2.1', label: '2.2.1' },
            { type: 'doc', id: 'update-notes/v2.2.0', label: '2.2.0' },
          ],
        },
        {
          type: 'category',
          label: '2.1',
          items: [
            { type: 'doc', id: 'update-notes/v2.1.21', label: '2.1.21' },
            { type: 'doc', id: 'update-notes/v2.1.20', label: '2.1.20' },
            { type: 'doc', id: 'update-notes/v2.1.19', label: '2.1.19' },
            { type: 'doc', id: 'update-notes/v2.1.18', label: '2.1.18' },
            { type: 'doc', id: 'update-notes/v2.1.17', label: '2.1.17' },
            { type: 'doc', id: 'update-notes/v2.1.16', label: '2.1.16' },
            { type: 'doc', id: 'update-notes/v2.1.15', label: '2.1.15' },
            { type: 'doc', id: 'update-notes/v2.1.14', label: '2.1.14' },
            { type: 'doc', id: 'update-notes/v2.1.13', label: '2.1.13' },
            { type: 'doc', id: 'update-notes/v2.1.12', label: '2.1.12' },
            { type: 'doc', id: 'update-notes/v2.1.11', label: '2.1.11' },
            { type: 'doc', id: 'update-notes/v2.1.10', label: '2.1.10' },
            { type: 'doc', id: 'update-notes/v2.1.9', label: '2.1.9' },
            { type: 'doc', id: 'update-notes/v2.1.8', label: '2.1.8' },
            { type: 'doc', id: 'update-notes/v2.1.7', label: '2.1.7' },
            { type: 'doc', id: 'update-notes/v2.1.6', label: '2.1.6' },
            { type: 'doc', id: 'update-notes/v2.1.5', label: '2.1.5' },
            { type: 'doc', id: 'update-notes/v2.1.4', label: '2.1.4' },
            { type: 'doc', id: 'update-notes/v2.1.3', label: '2.1.3' },
            { type: 'doc', id: 'update-notes/v2.1.2', label: '2.1.2' },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
