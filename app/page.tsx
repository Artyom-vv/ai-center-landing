import Button from "@/app/components/Button";

export default function Home() {
  return (
      <div className="wrapper">
          <h1>h1 trash / h1 треш</h1>
          <h2>h2 trash / h1 треш</h2>
          <h3>h3 trash / h1 треш</h3>
          <h4>h4 trash / h1 треш</h4>
          <h5>h5 trash / h1 треш </h5>
          <h6>h6 trash / h1 треш</h6>
          <p className="text-body-1x-small">Trash smallest / Треш поменьше</p>
          <p className="text-body-small">Trash smallest / Треш поменьше</p>
          <p className="text-body-normal">Trash smallest / Треш поменьше</p>
          <p className="text-body-big">Trash smallest / Треш поменьше</p>
          <p className="text-body-large">Trash smallest / Треш поменьше</p>
          <Button isDisabled={true}>Trash</Button>
      </div>
  );
}
