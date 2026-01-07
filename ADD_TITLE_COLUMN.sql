-- Add title column to contract_signatures table
-- Run this in your Supabase SQL Editor

ALTER TABLE contract_signatures
ADD COLUMN IF NOT EXISTS title TEXT;

-- Optional: Add a comment to describe the column
COMMENT ON COLUMN contract_signatures.title IS 'Job title or position of the person signing the contract';
