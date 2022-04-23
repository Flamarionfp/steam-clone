export const useStorybook = () => {
  const isRunningInStorybook = !!process.env.STORYBOOK

  return { isRunningInStorybook }
}