import React, { useState, KeyboardEvent } from 'react';
import { IoClose, IoAdd } from 'react-icons/io5';

interface EditableTagsProps {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  placeholder?: string;
  maxTags?: number;
  className?: string;
}

const EditableTags: React.FC<EditableTagsProps> = ({
  tags,
  onTagsChange,
  placeholder = "Add a tag...",
  maxTags = 10,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const addTag = (tagText: string) => {
    const trimmedTag = tagText.trim();
    
    // Don't add empty tags or duplicates
    if (trimmedTag && !tags.includes(trimmedTag) && tags.length < maxTags) {
      onTagsChange([...tags, trimmedTag]);
    }
    
    setInputValue("");
    setIsInputVisible(false);
  };

  const removeTag = (indexToRemove: number) => {
    onTagsChange(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Escape') {
      setInputValue("");
      setIsInputVisible(false);
    } else if (e.key === ',' && inputValue.trim()) {
      e.preventDefault();
      addTag(inputValue);
    }
  };

  const handleInputBlur = () => {
    if (inputValue.trim()) {
      addTag(inputValue);
    } else {
      setIsInputVisible(false);
    }
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {/* Existing Tags */}
      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-xl text-sm text-white hover:bg-white/20 transition-colors group"
        >
          <span>{tag}</span>
          <button
            onClick={() => removeTag(index)}
            className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 hover:text-red-400"
            aria-label={`Remove ${tag} tag`}
          >
           <IoClose size={14} />
          </button>
        </div>
      ))}

      {/* Add Tag Input */}
      {isInputVisible ? (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-xl text-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FF4D2A] focus:border-transparent"
          autoFocus
        />
      ) : (
        tags.length < maxTags && (
          <button
            onClick={() => setIsInputVisible(true)}
            className="flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/20 transition-colors border border-dashed border-white/30"
          >
            <IoAdd size={14} />
            Add tag
          </button>
        )
      )}
    </div>
  );
};

export default EditableTags;
