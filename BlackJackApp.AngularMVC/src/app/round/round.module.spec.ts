import { RoundModule } from './round.module';

describe('RoundModule', () => {
  let roundModule: RoundModule;

  beforeEach(() => {
    roundModule = new RoundModule();
  });

  it('should create an instance', () => {
    expect(roundModule).toBeTruthy();
  });
});
