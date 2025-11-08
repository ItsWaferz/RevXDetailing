/*
  # Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Customer's full name
      - `email` (text) - Customer's email address
      - `phone` (text) - Customer's phone number
      - `message` (text) - Customer's message/inquiry
      - `created_at` (timestamptz) - Timestamp when submission was created
      - `status` (text) - Status of the submission (default: 'new')

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions (public access for form submissions)
    - Add policy for authenticated users to read all submissions (for admin panel in future)

  3. Important Notes
    - Public users can only insert new submissions
    - Reading submissions requires authentication (for future admin features)
    - All submissions are timestamped automatically
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
