import styled from '@emotion/styled';

const FormContainer = styled.div`
  margin-top: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #ff0000;
  border-radius: 8px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ff3333;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #ff0000;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 200px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #ff3333;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;

export default function StorySubmissionForm() {
  return (
    <FormContainer>
      <Form action="https://formspree.io/f/mvgaevop" method="POST">
        <Input
          type="text"
          name="name"
          placeholder="Your Name (optional)"
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email (optional)"
        />
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <TextArea
          name="story"
          placeholder="Share your story here..."
          required
        />
        <SubmitButton type="submit">Submit Story</SubmitButton>
      </Form>
    </FormContainer>
  );
} 