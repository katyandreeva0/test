import { useState } from 'react';

interface ContentEditorProps {
  content: any;
  onContentChange: (content: any) => void;
}

export default function ContentEditor({ content, onContentChange }: ContentEditorProps) {
  const [activeTab, setActiveTab] = useState('hero');

  const updateContent = (section: string, field: string, value: any, nestedField?: string) => {
    const newContent = { ...content };
    if (nestedField) {
      if (!newContent[section][field]) newContent[section][field] = {};
      newContent[section][field][nestedField] = value;
    } else {
      newContent[section][field] = value;
    }
    onContentChange(newContent);
  };

  const updateNestedContent = (path: string[], value: any) => {
    const newContent = { ...content };
    let current = newContent;
    
    // Navigate to the parent object
    for (let i = 0; i < path.length - 1; i++) {
      if (!current[path[i]]) current[path[i]] = {};
      current = current[path[i]];
    }
    
    // Set the final value
    current[path[path.length - 1]] = value;
    onContentChange(newContent);
  };

  const updateArrayItem = (section: string, field: string, index: number, value: any) => {
    const newContent = { ...content };
    if (!newContent[section][field]) newContent[section][field] = [];
    newContent[section][field][index] = value;
    onContentChange(newContent);
  };

  const updateObjectInArray = (section: string, field: string, index: number, objectField: string, value: any) => {
    const newContent = { ...content };
    if (!newContent[section][field]) newContent[section][field] = [];
    if (!newContent[section][field][index]) newContent[section][field][index] = {};
    newContent[section][field][index][objectField] = value;
    onContentChange(newContent);
  };

  const tabs = [
    { id: 'hero', label: 'Hero' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'problem', label: 'Problem' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'earlyAccess', label: 'Early Access' },
    { id: 'faq', label: 'FAQ' },
    { id: 'finalCta', label: 'Final CTA' },
    { id: 'footer', label: 'Footer' }
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b bg-gray-50">
        <h2 className="text-xl mb-1">Content Editor</h2>
        <p className="text-sm text-gray-600">Changes are automatically saved to your browser</p>
      </div>
      
      {/* Tabs */}
      <div className="border-b bg-gray-100">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600 bg-white'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Badge</label>
              <input
                type="text"
                value={content.hero?.badge || ''}
                onChange={(e) => updateContent('hero', 'badge', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Headline Line 1</label>
              <input
                type="text"
                value={content.hero?.headline?.line1 || ''}
                onChange={(e) => updateNestedContent(['hero', 'headline', 'line1'], e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Headline Line 2</label>
              <input
                type="text"
                value={content.hero?.headline?.line2 || ''}
                onChange={(e) => updateNestedContent(['hero', 'headline', 'line2'], e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mobile Headline Line 1</label>
              <input
                type="text"
                value={content.hero?.headline?.mobile?.line1 || ''}
                onChange={(e) => updateNestedContent(['hero', 'headline', 'mobile', 'line1'], e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mobile Headline Line 2</label>
              <input
                type="text"
                value={content.hero?.headline?.mobile?.line2 || ''}
                onChange={(e) => updateNestedContent(['hero', 'headline', 'mobile', 'line2'], e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mobile Headline Line 3</label>
              <input
                type="text"
                value={content.hero?.headline?.mobile?.line3 || ''}
                onChange={(e) => updateNestedContent(['hero', 'headline', 'mobile', 'line3'], e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subheadline</label>
              <textarea
                value={content.hero?.subheadline || ''}
                onChange={(e) => updateContent('hero', 'subheadline', e.target.value)}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">CTA Button Text</label>
              <input
                type="text"
                value={content.hero?.ctaButton || ''}
                onChange={(e) => updateContent('hero', 'ctaButton', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Languages</label>
              {(content.hero?.languages || []).map((lang, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    value={lang}
                    onChange={(e) => updateArrayItem('hero', 'languages', index, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={`Language ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'navigation' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Brand Name</label>
              <input
                type="text"
                value={content.nav?.brand || ''}
                onChange={(e) => updateContent('nav', 'brand', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Early Access Label</label>
              <input
                type="text"
                value={content.nav?.earlyAccessLabel || ''}
                onChange={(e) => updateContent('nav', 'earlyAccessLabel', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Sign In Label</label>
              <input
                type="text"
                value={content.nav?.signInLabel || ''}
                onChange={(e) => updateContent('nav', 'signInLabel', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Get Started Label</label>
              <input
                type="text"
                value={content.nav?.getStartedLabel || ''}
                onChange={(e) => updateContent('nav', 'getStartedLabel', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Menu Items</label>
              {(content.nav?.menuItems || []).map((item, index) => (
                <div key={index} className="mb-4 p-3 border border-gray-200 rounded">
                  <div className="mb-2">
                    <label className="block text-xs font-medium mb-1">Label</label>
                    <input
                      type="text"
                      value={item.label || ''}
                      onChange={(e) => updateObjectInArray('nav', 'menuItems', index, 'label', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Link (href)</label>
                    <input
                      type="text"
                      value={item.href || ''}
                      onChange={(e) => updateObjectInArray('nav', 'menuItems', index, 'href', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'problem' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Badge</label>
              <input
                type="text"
                value={content.problem?.badge || ''}
                onChange={(e) => updateContent('problem', 'badge', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Headline</label>
              <input
                type="text"
                value={content.problem?.headline || ''}
                onChange={(e) => updateContent('problem', 'headline', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subheadline</label>
              <textarea
                value={content.problem?.subheadline || ''}
                onChange={(e) => updateContent('problem', 'subheadline', e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Problems</label>
              {(content.problem?.problems || []).map((problem, index) => (
                <div key={index} className="mb-4 p-3 border border-gray-200 rounded">
                  <div className="mb-2">
                    <label className="block text-xs font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={problem.title || ''}
                      onChange={(e) => updateObjectInArray('problem', 'problems', index, 'title', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Description</label>
                    <textarea
                      value={problem.description || ''}
                      onChange={(e) => updateObjectInArray('problem', 'problems', index, 'description', e.target.value)}
                      rows={2}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium mb-4">Pain Point Section</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Pain Point Headline</label>
                  <input
                    type="text"
                    value={content.problem?.painPoint?.headline || ''}
                    onChange={(e) => updateNestedContent(['problem', 'painPoint', 'headline'], e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtext</label>
                  <textarea
                    value={content.problem?.painPoint?.subtext || ''}
                    onChange={(e) => updateNestedContent(['problem', 'painPoint', 'subtext'], e.target.value)}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Transition Text</label>
                  <input
                    type="text"
                    value={content.problem?.painPoint?.transition || ''}
                    onChange={(e) => updateNestedContent(['problem', 'painPoint', 'transition'], e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Solution Text</label>
                  <input
                    type="text"
                    value={content.problem?.painPoint?.solution || ''}
                    onChange={(e) => updateNestedContent(['problem', 'painPoint', 'solution'], e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Badge</label>
              <input
                type="text"
                value={content.benefits?.badge || ''}
                onChange={(e) => updateContent('benefits', 'badge', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Headline</label>
              <input
                type="text"
                value={content.benefits?.headline || ''}
                onChange={(e) => updateContent('benefits', 'headline', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subheadline</label>
              <textarea
                value={content.benefits?.subheadline || ''}
                onChange={(e) => updateContent('benefits', 'subheadline', e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">CTA Button Text</label>
              <input
                type="text"
                value={content.benefits?.ctaButton || ''}
                onChange={(e) => updateContent('benefits', 'ctaButton', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Benefit Blocks</label>
              {(content.benefits?.blocks || []).map((block, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-3">Block {index + 1}</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium mb-1">Badge</label>
                      <input
                        type="text"
                        value={block.badge || ''}
                        onChange={(e) => updateObjectInArray('benefits', 'blocks', index, 'badge', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={block.title || ''}
                        onChange={(e) => updateObjectInArray('benefits', 'blocks', index, 'title', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Description</label>
                      <textarea
                        value={block.description || ''}
                        onChange={(e) => updateObjectInArray('benefits', 'blocks', index, 'description', e.target.value)}
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Features</label>
                      {(block.features || []).map((feature, featureIndex) => (
                        <div key={featureIndex} className="mb-2">
                          <input
                            type="text"
                            value={feature}
                            onChange={(e) => {
                              const newContent = { ...content };
                              newContent.benefits.blocks[index].features[featureIndex] = e.target.value;
                              onContentChange(newContent);
                            }}
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder={`Feature ${featureIndex + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Badge</label>
              <input
                type="text"
                value={content.testimonials?.badge || ''}
                onChange={(e) => updateContent('testimonials', 'badge', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Headline</label>
              <input
                type="text"
                value={content.testimonials?.headline || ''}
                onChange={(e) => updateContent('testimonials', 'headline', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subheadline</label>
              <textarea
                value={content.testimonials?.subheadline || ''}
                onChange={(e) => updateContent('testimonials', 'subheadline', e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Reviews</label>
              {(content.testimonials?.reviews || []).map((review, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-3">Review {index + 1}</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium mb-1">Name</label>
                      <input
                        type="text"
                        value={review.name || ''}
                        onChange={(e) => updateObjectInArray('testimonials', 'reviews', index, 'name', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Content</label>
                      <textarea
                        value={review.content || ''}
                        onChange={(e) => updateObjectInArray('testimonials', 'reviews', index, 'content', e.target.value)}
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Badge</label>
                      <input
                        type="text"
                        value={review.badge || ''}
                        onChange={(e) => updateObjectInArray('testimonials', 'reviews', index, 'badge', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'earlyAccess' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Badge</label>
              <input
                type="text"
                value={content.earlyAccess?.badge || ''}
                onChange={(e) => updateContent('earlyAccess', 'badge', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Desktop Headline</label>
              <input
                type="text"
                value={content.earlyAccess?.headline?.desktop || ''}
                onChange={(e) => updateNestedContent(['earlyAccess', 'headline', 'desktop'], e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mobile Headline Line 1</label>
              <input
                type="text"
                value={content.earlyAccess?.headline?.mobile?.line1 || ''}
                onChange={(e) => updateNestedContent(['earlyAccess', 'headline', 'mobile', 'line1'], e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mobile Headline Line 2</label>
              <input
                type="text"
                value={content.earlyAccess?.headline?.mobile?.line2 || ''}
                onChange={(e) => updateNestedContent(['earlyAccess', 'headline', 'mobile', 'line2'], e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subheadline</label>
              <textarea
                value={content.earlyAccess?.subheadline || ''}
                onChange={(e) => updateContent('earlyAccess', 'subheadline', e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Benefits</label>
              {(content.earlyAccess?.benefits || []).map((benefit, index) => (
                <div key={index} className="mb-4 p-3 border border-gray-200 rounded">
                  <div className="mb-2">
                    <label className="block text-xs font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={benefit.title || ''}
                      onChange={(e) => updateObjectInArray('earlyAccess', 'benefits', index, 'title', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Description</label>
                    <textarea
                      value={benefit.description || ''}
                      onChange={(e) => updateObjectInArray('earlyAccess', 'benefits', index, 'description', e.target.value)}
                      rows={2}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">CTA Button Text</label>
              <input
                type="text"
                value={content.earlyAccess?.ctaButton || ''}
                onChange={(e) => updateContent('earlyAccess', 'ctaButton', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Checkmarks</label>
              {(content.earlyAccess?.checkmarks || []).map((checkmark, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    value={checkmark}
                    onChange={(e) => updateArrayItem('earlyAccess', 'checkmarks', index, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={`Checkmark ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Badge</label>
              <input
                type="text"
                value={content.faq?.badge || ''}
                onChange={(e) => updateContent('faq', 'badge', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Headline</label>
              <input
                type="text"
                value={content.faq?.headline || ''}
                onChange={(e) => updateContent('faq', 'headline', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subheadline</label>
              <textarea
                value={content.faq?.subheadline || ''}
                onChange={(e) => updateContent('faq', 'subheadline', e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Questions</label>
              {(content.faq?.questions || []).map((faq, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-3">FAQ {index + 1}</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium mb-1">Question</label>
                      <input
                        type="text"
                        value={faq.question || ''}
                        onChange={(e) => updateObjectInArray('faq', 'questions', index, 'question', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Answer</label>
                      <textarea
                        value={faq.answer || ''}
                        onChange={(e) => updateObjectInArray('faq', 'questions', index, 'answer', e.target.value)}
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'finalCta' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Badge</label>
              <input
                type="text"
                value={content.finalCta?.badge || ''}
                onChange={(e) => updateContent('finalCta', 'badge', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Headline</label>
              <input
                type="text"
                value={content.finalCta?.headline || ''}
                onChange={(e) => updateContent('finalCta', 'headline', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subheadline</label>
              <textarea
                value={content.finalCta?.subheadline || ''}
                onChange={(e) => updateContent('finalCta', 'subheadline', e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">CTA Button Text</label>
              <input
                type="text"
                value={content.finalCta?.ctaButton || ''}
                onChange={(e) => updateContent('finalCta', 'ctaButton', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Checkmarks</label>
              {(content.finalCta?.checkmarks || []).map((checkmark, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    value={checkmark}
                    onChange={(e) => updateArrayItem('finalCta', 'checkmarks', index, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={`Checkmark ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'footer' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Brand</label>
              <input
                type="text"
                value={content.footer?.brand || ''}
                onChange={(e) => updateContent('footer', 'brand', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Early Access Label</label>
              <input
                type="text"
                value={content.footer?.earlyAccessLabel || ''}
                onChange={(e) => updateContent('footer', 'earlyAccessLabel', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={content.footer?.description || ''}
                onChange={(e) => updateContent('footer', 'description', e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Copyright</label>
              <input
                type="text"
                value={content.footer?.copyright || ''}
                onChange={(e) => updateContent('footer', 'copyright', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium mb-4">Footer Links</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Features Links</label>
                {(content.footer?.links?.features || []).map((link, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="text"
                      value={link}
                      onChange={(e) => {
                        const newContent = { ...content };
                        if (!newContent.footer.links) newContent.footer.links = {};
                        if (!newContent.footer.links.features) newContent.footer.links.features = [];
                        newContent.footer.links.features[index] = e.target.value;
                        onContentChange(newContent);
                      }}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`Feature link ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Support Links</label>
                {(content.footer?.links?.support || []).map((link, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="text"
                      value={link}
                      onChange={(e) => {
                        const newContent = { ...content };
                        if (!newContent.footer.links) newContent.footer.links = {};
                        if (!newContent.footer.links.support) newContent.footer.links.support = [];
                        newContent.footer.links.support[index] = e.target.value;
                        onContentChange(newContent);
                      }}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`Support link ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Company Links</label>
                {(content.footer?.links?.company || []).map((link, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="text"
                      value={link}
                      onChange={(e) => {
                        const newContent = { ...content };
                        if (!newContent.footer.links) newContent.footer.links = {};
                        if (!newContent.footer.links.company) newContent.footer.links.company = [];
                        newContent.footer.links.company[index] = e.target.value;
                        onContentChange(newContent);
                      }}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`Company link ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}