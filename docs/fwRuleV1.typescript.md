# `fwRuleV1` Submodule <a name="`fwRuleV1` Submodule" id="@ithings/cdktf-provider-openstack.fwRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FwRuleV1 <a name="FwRuleV1" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1 openstack_fw_rule_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer"></a>

```typescript
import { fwRuleV1 } from '@ithings/cdktf-provider-openstack'

new fwRuleV1.FwRuleV1(scope: Construct, id: string, config: FwRuleV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config">FwRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config">FwRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDestinationIpAddress">resetDestinationIpAddress</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDestinationPort">resetDestinationPort</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetSourceIpAddress">resetSourceIpAddress</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetSourcePort">resetSourcePort</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationIpAddress` <a name="resetDestinationIpAddress" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDestinationIpAddress"></a>

```typescript
public resetDestinationIpAddress(): void
```

##### `resetDestinationPort` <a name="resetDestinationPort" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDestinationPort"></a>

```typescript
public resetDestinationPort(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSourceIpAddress` <a name="resetSourceIpAddress" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetSourceIpAddress"></a>

```typescript
public resetSourceIpAddress(): void
```

##### `resetSourcePort` <a name="resetSourcePort" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetSourcePort"></a>

```typescript
public resetSourcePort(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetValueSpecs"></a>

```typescript
public resetValueSpecs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FwRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isConstruct"></a>

```typescript
import { fwRuleV1 } from '@ithings/cdktf-provider-openstack'

fwRuleV1.FwRuleV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformElement"></a>

```typescript
import { fwRuleV1 } from '@ithings/cdktf-provider-openstack'

fwRuleV1.FwRuleV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformResource"></a>

```typescript
import { fwRuleV1 } from '@ithings/cdktf-provider-openstack'

fwRuleV1.FwRuleV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport"></a>

```typescript
import { fwRuleV1 } from '@ithings/cdktf-provider-openstack'

fwRuleV1.FwRuleV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FwRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FwRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FwRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FwRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationIpAddressInput">destinationIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationPortInput">destinationPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.ipVersionInput">ipVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourceIpAddressInput">sourceIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourcePortInput">sourcePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.valueSpecsInput">valueSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationIpAddress">destinationIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationPort">destinationPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.ipVersion">ipVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourceIpAddress">sourceIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourcePort">sourcePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationIpAddressInput`<sup>Optional</sup> <a name="destinationIpAddressInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationIpAddressInput"></a>

```typescript
public readonly destinationIpAddressInput: string;
```

- *Type:* string

---

##### `destinationPortInput`<sup>Optional</sup> <a name="destinationPortInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationPortInput"></a>

```typescript
public readonly destinationPortInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sourceIpAddressInput`<sup>Optional</sup> <a name="sourceIpAddressInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourceIpAddressInput"></a>

```typescript
public readonly sourceIpAddressInput: string;
```

- *Type:* string

---

##### `sourcePortInput`<sup>Optional</sup> <a name="sourcePortInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourcePortInput"></a>

```typescript
public readonly sourcePortInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.valueSpecsInput"></a>

```typescript
public readonly valueSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `action`<sup>Required</sup> <a name="action" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationIpAddress`<sup>Required</sup> <a name="destinationIpAddress" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationIpAddress"></a>

```typescript
public readonly destinationIpAddress: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationPort"></a>

```typescript
public readonly destinationPort: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sourceIpAddress`<sup>Required</sup> <a name="sourceIpAddress" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourceIpAddress"></a>

```typescript
public readonly sourceIpAddress: string;
```

- *Type:* string

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourcePort"></a>

```typescript
public readonly sourcePort: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FwRuleV1Config <a name="FwRuleV1Config" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.Initializer"></a>

```typescript
import { fwRuleV1 } from '@ithings/cdktf-provider-openstack'

const fwRuleV1Config: fwRuleV1.FwRuleV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#action FwRuleV1#action}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#protocol FwRuleV1#protocol}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#description FwRuleV1#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.destinationIpAddress">destinationIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_ip_address FwRuleV1#destination_ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.destinationPort">destinationPort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_port FwRuleV1#destination_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#enabled FwRuleV1#enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#id FwRuleV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.ipVersion">ipVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#ip_version FwRuleV1#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#name FwRuleV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#region FwRuleV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.sourceIpAddress">sourceIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_ip_address FwRuleV1#source_ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.sourcePort">sourcePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_port FwRuleV1#source_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#tenant_id FwRuleV1#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#value_specs FwRuleV1#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#action FwRuleV1#action}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#protocol FwRuleV1#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#description FwRuleV1#description}.

---

##### `destinationIpAddress`<sup>Optional</sup> <a name="destinationIpAddress" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.destinationIpAddress"></a>

```typescript
public readonly destinationIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_ip_address FwRuleV1#destination_ip_address}.

---

##### `destinationPort`<sup>Optional</sup> <a name="destinationPort" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.destinationPort"></a>

```typescript
public readonly destinationPort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_port FwRuleV1#destination_port}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#enabled FwRuleV1#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#id FwRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#ip_version FwRuleV1#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#name FwRuleV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#region FwRuleV1#region}.

---

##### `sourceIpAddress`<sup>Optional</sup> <a name="sourceIpAddress" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.sourceIpAddress"></a>

```typescript
public readonly sourceIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_ip_address FwRuleV1#source_ip_address}.

---

##### `sourcePort`<sup>Optional</sup> <a name="sourcePort" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.sourcePort"></a>

```typescript
public readonly sourcePort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_port FwRuleV1#source_port}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#tenant_id FwRuleV1#tenant_id}.

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#value_specs FwRuleV1#value_specs}.

---



